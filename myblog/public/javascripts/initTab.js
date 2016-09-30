;(function(){
  function initTab(){
    var tabName = $("#navTab").attr('name')
    var $tabList = $("#nav li[name]")
    for (var i = 0 ; i < $tabList.length ; i++){
      
      var $item = $($tabList[i])
      if(tabName === $item.attr("name")){
        $item.addClass("active")
      }else{
        $item.removeClass("active")
      }
    }
  }

  initTab()  
})()