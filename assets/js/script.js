                 
$(document).ready(function(){
    $(function() {
        $('.lazy').lazy({
        	scrollDirection: 'vertical',
	        // effect: 'fadeIn',
	        visibleOnly: true,
            placeholder: "data:../images/loading.gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
        });
    });
});