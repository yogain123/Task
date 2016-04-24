
angular.module('myApp',['angular.filter']).controller('myController', function($scope){
                                           
                                    
                                    $scope.disabled="true";
                                    $scope.items = [];
                                    $scope.items2 = [];
                                    $scope.items3 = [];
                                    $scope.items_repeating = [];
                                    $scope.tasks = [];
            
                                    //System.out.println(count);
                                    //$scope.indexxx = false;
                                   
                                    $scope.add = (function()
                                    {
                                       $scope.items.push({});
                                       $scope.indexxx = false;

                                    });
            
                                    $scope.add2 = (function()
                                    {
                                        
                                        $scope.items2.push({});
                                        $scope.indexxx = false;
                                        
                                    });
            
                                    $scope.add3 = (function()
                                    {
                                        
                                        $scope.items3.push({});
                                        $scope.indexxx = false;
                                        
                                    });
            
            
                                    $scope.add_repeating = (function()
                                    {
                                        
                                        $scope.items_repeating.push({});
                                        $scope.indexxx = false;
                                        
                                    });
            
            
                                  $scope.addTask = (function(){
                               
                                      var per = prompt("Task Title");
                                      if(per !=null)
                                      {
                                            $scope.taskName = per;    
                                            $scope.tasks.push({});
                                      }
                                      
                                  });
                                   
            
                                        
                                    //  document.print(items);
                                  /*  $scope.edit = (function()
                                    {
                                       $scope.disabled="false"; 
                                    });   */
            
                     //   $scope.items = getItems();
            
 $scope.removeRow = function(name){				
		//var index = -1;	
     //alert(name);
   var comArr = eval( $scope.items );
       //alert(comArr[1].name);
    // alert(comArr.length);
    // alert(comArr[0]);
    // alert(comArr.indexOf(name));
     //alert(comArr[0])
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				$scope.items.splice( i, 1 );
				break;
			}
		}
		if( i === -1 ) {
			alert( "Something gone wrong" );
		}
				
	};   
            $scope.removeRow2 = function(name2){				
		var index = -1;		
		var comArr = eval( $scope.items2 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name2 === name2 ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items2.splice( index, 1 );		
	};
            
            
                $scope.removeRow3 = function(name3){				
		var index = -1;		
		var comArr = eval( $scope.items3 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name3 === name3 ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items3.splice( index, 1 );		
	};
            
            
        $scope.removeRow_repeating = function(name_repeating){				
		var index = -1;		
		var comArr = eval( $scope.items_repeating );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name_repeating === name_repeating ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items_repeating.splice( index, 1 );		
	};    
            
            
$scope.edit = function(name){
            
         var index = -1;		
		var comArr = eval( $scope.items );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
                $scope.indexxx=false;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items.disabled(index,indexxx,1);		
	};
            
            $scope.edit2 = function(name2){
            
         var index = -1;		
		var comArr = eval( $scope.items2 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name2 === name2 ) {
				index = i;
                $scope.indexxx=false;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items2.disabled(index,indexxx,1);		
	};
            
                $scope.edit3 = function(name3){
            
         var index = -1;		
		var comArr = eval( $scope.items3 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name3 === name3 ) {
				index = i;
                $scope.indexxx=false;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items3.disabled(index,indexxx,1);		
	};
            
             $scope.edit_repeating = function(name_repeating){
            
         var index = -1;		
		var comArr = eval( $scope.items_repeating );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name_repeating === name_repeating ) {
				index = i;
                $scope.indexxx=false;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items_repeating.disabled(index,indexxx,1);		
	};
            
            
             $scope.save = function(name){
            
         var index = -1;		
		var comArr = eval( $scope.items );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
                $scope.indexxx=true;
                window.alert("saved");
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.item.disabled(index,indexxx,1);		
	};
            
               $scope.save2 = function(name2){
            
         var index = -1;		
		var comArr = eval( $scope.items2 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name2 === name2 ) {
				index = i;
                $scope.indexxx=true;
                window.alert("saved");
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.item2.disabled(index,indexxx,1);		
	};
                  $scope.save3 = function(name3){
            
         var index = -1;		
		var comArr = eval( $scope.items3 );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name3 === name3 ) {
				index = i;
                $scope.indexxx=true;
                window.alert("saved");
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items3.disabled(index,indexxx,1);		
	};
        
            
              $scope.save_repeating = function(name_repeating){
            
         var index = -1;		
		var comArr = eval( $scope.items_repeating );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name_repeating === name_repeating ) {
				index = i;
                $scope.indexxx=true;
                window.alert("saved");
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.items_repeating.disabled(index,indexxx,1);		
	};
            
              $scope.removeRowAll = (function(){
                var c = $scope.items.length;
                   
                
               for( var i = 0; i < c ; i++ ) 
               {
                   index = i;
                 $scope.items.splice(index,c);  
			
			  }
		       
            });  
            
              $scope.removeRowAll2 = (function(){
                var c = $scope.items2.length;
                   
                
               for( var i = 0; i < c ; i++ ) 
               {
                   index = i;
                 $scope.items2.splice(index,c);  
			
			  }
		
             });  
            
                $scope.removeRowAll3 = (function(){
                var c = $scope.items3.length;
                   
                
               for( var i = 0; i < c ; i++ ) 
               {
                   index = i;
                 $scope.items3.splice(index,c);  
			
			  }
		
                }); 
            
              $scope.removeRowAll_repeating = (function(){
                var c = $scope.items3_repeating.length;
                   
                
               for( var i = 0; i < c ; i++ ) 
               {
                   index = i;
                 $scope.items3_repeating.splice(index,c);  
			
			  }
		
                });  
            
              $scope.removeAllTask = (function(){
                var c = $scope.tasks.length;
                   
                
               for( var i = 0; i < c ; i++ ) 
               {
                   index = i;
                 $scope.tasks.splice(index,c);  
			
			  }
		    });  
            
         });
    

    
