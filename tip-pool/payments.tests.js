describe('Payments test(with setup and tear down', () => {
    beforeEach( () => {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    })

    it('should add bill amount, tip amount and tip percent to allPayments', () => {
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    it('should not add payment on submitPaymentInfo() if input is empty', () => {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should add input value to #paymentTable on appendPaymentTable()', () => {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);
        let table = document.querySelectorAll('#paymentTable tbody tr td');
        
        expect(table[0].innerText).toEqual('$50');
        expect(table[1].innerText).toEqual('$10');
        expect(table[2].innerText).toEqual('20%')
    });

    it('should return billAmt, tipAmt, tipPercent on createCurPayment()', () => {
        let payment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        }

        expect(createCurPayment()).toEqual(payment);
    });

    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();
    
        expect(curPayment).toEqual(undefined);
    });


    // it('should calculate and append to summaryTable bill total, tip total and tipPerventAvg on updateSummary()', () => {
    //     // let allPAyments = {
    //     //     payment1: {billAmt: '50', tipAmt: '10', tipPercent: 20},
    //     //     payment2: {billAmt: '100', tipAmt: '30', tipPercent: 30}
    //     // }
    //     let summaryTable = document.querySelectorAll('#summaryTable tbody tr td');

    //     expect(summaryTable[0].innerText).toEqual(`$50`);
    //     expect(summaryTable[1].innerText).toEqual(`$10`);
    //     expect(summaryTable[2].innerText).toEqual(`20%`);
    // })

    afterEach( () => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
    })

})