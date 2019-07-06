export interface ReduxState<PayloadType> {
    type: string;
    payload: PayloadType;
}
