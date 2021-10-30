describe('helpers test (with setup and teardown)', () => {

    beforeEach(() => {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    })

    it('should sum all bills, tips and tipPercents from allPayments on sumPaymentTotal()', () => {
        sumPaymentTotal();

        expect(sumPaymentTotal('billAmt')).toEqual(50);
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    })

    it('should calculate tipPercentAvg from billAmt and tipAmt on calculateTipPercent', () => {

        expect(calculateTipPercent(133, 66)).toEqual(50);
        expect(calculateTipPercent(150, 40)).toEqual(27);
    })

    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });

      it('should add a delete td to tr on appendDeleteBtn() and delete tr on click', () => {
          let newTr = document.createElement('tr');

          appendDeleteBtn(newTr);
          
          expect(newTr.children.length).toEqual(1);
          expect(newTr.firstChild.innerText).toEqual('X');

        //   let deleteBtn = newTr.firstChild;

        //   deleteTr(deleteBtn);
          
        //   expect(newTr.children.length).toEqual(0);
      })

      it('should delete tr on click of `x` td', () => {
          let newTr = document.createElement('tr');
          appendDeleteBtn(newTr);

          let deleteBtn = newTr.firstElementChild;

          deleteTr(deleteBtn);

          expect(newTr.children.length).toEqual(0);
      })

    afterEach(() => {
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
