app.service("commonservice",function($http){
    return{
    	demo:function(){
    		return $http({
    			method:"get",
    			url:"http://staging.getion.in/index.php/request?action=ionize&module=ionize&resource=posts&group_id=4"
    		});
    	},
    	demo1:function(){
    		return $http.get("http://staging.getion.in/index.php/request?action=reviewposts&module=ionize&resource=posts"
    		);
    	}
    }
});