$(document).ready(function () {
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
      paging: false,
      info: false
    }
  );
});
