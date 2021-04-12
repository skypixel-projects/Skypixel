function download() {
    alert('The function is working!');
    
    $.fileDownload('some/file.pdf')
    .done(function () { alert('File download a success!'); })
    .fail(function () { alert('File download failed!'); });
}