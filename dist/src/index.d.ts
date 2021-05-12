declare const MnemonicKey: any, LCDClient: any, MsgExecuteContract: any, MsgSwap: any, Wallet: any, Coin: any, Coins: any, StdFee: any;
declare const fetchAPI: any;
declare const fs: any;
declare const moment: any;
declare const MNEMONIC: string | undefined;
declare const COIN_TYPE = 330;
declare const market = "terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal";
declare const overseer = "terra1qljxd0y3j3gk97025qvl3lgq8ygup4gsksvaxv";
declare const bLUNA_token = "terra1u0t35drzyy0mujj8rkdyzhe264uls4ug3wdp3x";
declare const custody = "terra1ltnkx0mv7lf2rca9f8w740ashu93ujughy4s7p";
declare const aUST = "terra1ajt556dpzvjwl0kl5tzku3fc3p3knkg9mkv8jl";
declare const ANC_token = "terra19nxz35c8f7t3ghdxrxherym20tux8eccar0c3k";
declare const ANC_LP = "terra1vg0qyq92ky9z9dp0j9fv5rmr2s80sg605dah6f";
declare const ANC_pool = "terra1wfvczps2865j0awnurk9m04u7wdmd6qv3fdnvz";
declare const MIR_LP_staking = "terra1a06dgl27rhujjphsn4drl242ufws267qxypptx";
declare const MIR_LP = "terra1zrryfhlrpg49quz37u90ck6f396l4xdjs5s08j";
declare class Repay {
    wallet: any;
    constructor();
    execute(msgs: typeof MsgExecuteContract[], type?: string): Promise<void>;
    pollingTx(txHash: any): Promise<void>;
    repay(amount: any): Promise<void>;
    withdraw_aUST(aust_amount: any): Promise<void>;
    unstake_ANC_LP(LP_token_amount: any): Promise<void>;
    withdraw_ANC_LP(LP_token_amount: any): Promise<void>;
    unstake_mAsset_LP(LP_token_amount: number, token: string, symbol: string): Promise<void>;
    withdraw_mAsset_LP(LP_token_amount: number, token_data: any, symbol: string): Promise<void>;
    withdraw_bLUNA(amount: number): Promise<void>;
    instant_burn(burnamount: number, max_premium_rate: number): Promise<void>;
    luna2Ust(swapamount: number): Promise<void>;
    provide_bLUNA(provide_amount: number): Promise<void>;
    borrow_ust(ust_amount: number): Promise<void>;
}
declare const repayHandler: Repay;
declare const myAddress: any;
declare function aUST_process(insufficientUST: number): Promise<void>;
declare function ANC_LP_process(insufficientUST: number): Promise<void>;
declare function mAsset_LP_process(insufficientUST: number, symbol: string): Promise<void>;
declare function instant_burn_process(nowPercent: number): Promise<void>;
declare function percent2number(input: string): number;
declare var option: any;
declare var percentNow: number;
declare var borrowLimit: number;
declare var loanAmount: number;
declare var target_percent: number;
declare var trigger_percent: number;
declare var belowTrigger: number;
declare var max_premium_rate: number;
declare var get_UST_option: any;
declare var instant_burn: any;
declare function check_option(): Promise<boolean>;
declare function check_remain_UST(): Promise<boolean>;
declare function get_UST(option: string[], insufficientUST: number): Promise<void>;
declare function repay_amount(target_percent: number): Promise<number>;
declare function update_state(): Promise<number>;
declare function getting_UST_process(UST_remain: number, total_needed_amount: number): Promise<void>;
declare function sleep(ms: number): Promise<unknown>;
declare function main(): Promise<void>;
