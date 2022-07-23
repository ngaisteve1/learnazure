$(document).ready(function () {
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
    }
  );
});

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

showHideColumn(3, false);
showHideColumn(4, false);
showHideColumn(5, false);

if(params.id == 's'){
  showHideColumn(3, true);
  showHideColumn(4, true);
  showHideColumn(5, true);
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