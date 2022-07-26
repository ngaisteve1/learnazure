$(document).ready(function () {
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
      paging: false,
      info: false
    }
  );
});

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
debugger
showHideColumn(3, false);
showHideColumn(4, false);
showHideColumn(5, false);
showHideColumn(6, false);
showHideColumn(7, false);
showHideColumn(8, false);
debugger
if(params.id == 's'){
  showHideColumn(3, true);
  showHideColumn(4, true);
  showHideColumn(5, true);
  showHideColumn(6, true);
  showHideColumn(7, true);
  showHideColumn(8, true);
}

function showHideColumn(col_no, do_show) {
  var rows = document.getElementById('tbl').rows;

  for (var row = 0; row < rows.length; row++) {
      var cols = rows[row].cells;
      if (col_no >= 0 && col_no < cols.length) {
          cols[col_no].style.display = do_show ? '' : 'none';
      }
  }
}