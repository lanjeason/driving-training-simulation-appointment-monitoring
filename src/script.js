var DTInit = {
    getItem: function(num) {
        var $searchList = $($('.trainingtable')[0]);
        var $searchItems = $searchList.find('tr');
        var searchItemLength = $searchItems.length;
        for (var i = 2; i < searchItemLength; i++) {
            var $searchItem = $($searchItems[i]);
            var itemTime = $($searchItem.find('td')[0]).html();
            var status = $($($searchItem.find('td')[3]).find('a')).html();
            if ($.inArray(itemTime, DTConfig.time) >= 0 && status !== '已满' && status !== '无排班') {
                //console.log($.inArray(itemTime, DTConfig.time), itemTime, status);
                DTInit.notify();
            };
            if (i === searchItemLength - 1) {
                //console.log($.inArray(itemTime, DTConfig.time), itemTime, status, 'no');
                console.log(num);
                if (num === DTConfig.area.length - 1) {
                    var nextArea = DTConfig.area[0];
                } else {
                    var nextArea = DTConfig.area[++num];
                }
                console.log(nextArea);
                window.location.href = nextArea;
            }
        };
    },

    notify: function() {
        alert('OK');
    },

    nowArea: function() {
        var areaID = window.location.pathname.split('/')[3];
        var num = $.inArray(areaID, DTConfig.area);
        if (num >= 0){
            DTInit.getItem(num);
        } else {
            window.location.href = DTConfig.area[0];
        };
    }
}

if (window.location.host === DTConfig.host_name) {
    $(document).ready(function() {
        DTInit.nowArea();
    });
};