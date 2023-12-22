           function toggleGeneralLedger() {
        var generalLedgerList = document.getElementById('generalLedgerList');
        generalLedgerList.classList.toggle('hidden');
    }

    function toggleJournalTransactions() {
        var journalTransactionsTable = document.getElementById('journalTransactionsTable');
        journalTransactionsTable.classList.toggle('hidden');
    }

    // Function to toggle the Worksheet section
    function toggleWorksheet() {
        var worksheetContent = document.getElementById('worksheetContent');
        worksheetContent.classList.toggle('hidden');
    }

    function toggleIncomeStatement() {
        var IncomeState = document.getElementById('IncomeState');
        IncomeState.classList.toggle('hidden');
    }
function toggleStatementsOfChangesInEquity() {
    var statementsOfChangesInEquityContent = document.getElementById('StatementsOfChangesInEquityContent');
    statementsOfChangesInEquityContent.classList.toggle('hidden');
    }

    function toggleBalanceSheet() {
    var balanceSheetContent = document.getElementById('BalanceSheetContent');
    balanceSheetContent.classList.toggle('hidden');
    }
    function toggleCashFlows() {
    var cashflows = document.getElementById('CashFlowsTotal');
    cashflows.classList.toggle('hidden');
    }
    function toggleClosingEntries() {
    var closingEntries = document.getElementById('ClosingEntries');
    closingEntries.classList.toggle('hidden');
    }
     function toggleAdjustingEntries() {
        var adjustingEntriesTable = document.getElementById("AdjustingEntriesTotal");
        adjustingEntriesTable.classList.toggle("hidden");
    }
     function togglePostClosingTrialBalance() {
        var postClosingTrialBalanceTable = document.getElementById("PostClosingTrialBalance");
        postClosingTrialBalanceTable.classList.toggle("hidden");
    }
    function toggleReversingEntries() {
        var reversingEntriesTable = document.getElementById("ReversingEntries");
        reversingEntriesTable.classList.toggle("hidden");
    }
