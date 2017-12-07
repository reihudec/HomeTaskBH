//Сортировка
//app.js
    $scope.priceOrder = 'name';
    $scope.reverse = true;
    $scope.setOrder = function(order){  
    $scope.reverse = ($scope.priceO
    
 //index.html
 <tr ng-repeat="price in priceList | filter:priceSearch | orderBy:priceOrder:reverse">
                <td>{{$index+1}}</td>
                <td>{{price.name}}</td>
                <td>{{price.price | currency}}</td>
                <td><span ng-show="price.discount">{{price.discount * 100}}% </span>
                <span  ng-hide="price.discount" >-</span></td>
                <td>{{price.price*(1-price.discount)| currency}}</td>
</tr>
