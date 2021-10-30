describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on SubmitServerInput() if input is empty', () => {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add server names and earnings to the #serverTable', () => {

    submitServerInfo();
    updateServerTable();

    let table = document.querySelectorAll('#serverTable tbody tr td');

    expect(table[0].innerText).toEqual('Alice');
    expect(table[1].innerText).toEqual('$0.00');

    expect(table.length).toEqual(3);
  })

  afterEach(function() {
    serverId = 0;
    serverNameInput.value = '';
    serverTbody.innerHtml = '';
    allServers = {};
  });
});
