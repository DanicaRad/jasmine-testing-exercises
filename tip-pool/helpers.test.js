describe('helpers test (with setup and teardown)', () => {

    beforeEach(() => {
        let allPAyments = {
            payment1: {billAmt: '50', tipAmt: '10', tipPercent: 20},
            payment2: {billAmt: '100', tipAmt: '30', tipPercent: 30}
        }
    })

    it('should sum all bills, tips and tipPercents from allPayments on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('billAmt')).toEqual(150);
    })

    // it('should calculate tipPercentAvg from billAmt and tipAmt on calculateTipPercent', () => {

    // })
})
