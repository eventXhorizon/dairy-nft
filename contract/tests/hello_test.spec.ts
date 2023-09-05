import { initContext, Context } from './context';
import assert from "assert";

let context: Context;

beforeAll(async () => {
    // 初始化全局上下文
    context = await initContext();
});

afterAll(async () => {
    const { worker } = context;
    // 记得关 sandbox, 不然多跑几次内存就满了
    await worker.tearDown();
});

const TokenMetadata = {
    media: "https://example.com/media.png",
    description: "desc test"
}

test('Test setter without permission', async () => {
    const { contract, root } = context;

    const promise = root.call<void>(contract, 'mint', {
        account_id: 'bob.near',
        metadata: TokenMetadata,
        memo: "hello test"
    });

    await expect(promise).rejects.toThrow('Only contract owner can call this method.');
});

test('Test mint', async () => {
    const { contract, alice } = context;

    await alice.call(contract, 'mint', {
        account_id: 'alice.near',
        metadata: TokenMetadata,
        memo: "mint test"
    });

    const view_nft_token = await contract.view<any>('nft_token', {
        token_id: "1",
    });
    expect(view_nft_token.token_id).toEqual("1");
});

test('Test burn without permission', async () => {
    const { contract, alice, root } = context;

    await alice.call(contract, 'mint', {
        account_id: 'alice.near',
        metadata: TokenMetadata,
        memo: "mint test"
    });

    const promise = root.call<void>(contract, 'burn', {
        account_id: 'alice.near',
        token_id: "1",
    });

    await expect(promise).rejects.toThrow('Only contract owner can call this method.');
});

test('Test burn by owner', async () => {
    const { contract, alice } = context;

    await alice.call(contract, 'mint', {
        account_id: 'alice.near',
        metadata: TokenMetadata,
        memo: "mint test"
    });

    await alice.call<void>(contract, 'burn', {
        account_id: 'alice.near',
        token_id: "1",
    });

    const view_nft_token = await contract.view<any>('nft_token', {
        token_id: "1",
    });
    expect(view_nft_token).toBeNull();
});