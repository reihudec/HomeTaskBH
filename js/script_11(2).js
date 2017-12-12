//index.html
<!DOCTYPE html>
<html lang="ru" ng-app="myApp">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/angular.min.js"></script>
    <script src="js/angular-locale_ru-by.js"></script>
    <script src="js/app.js"></script>
    <title>Document</title>
</head>

<body ng-controller="myCtrl">
    <div class="container">
        <h1 class="mt-5 mb=5">{{priceTitle}} от {{priceDate | date}}</h1>
        <p>
            <span>Поиск</span>
            <input ng-model="priceSearch" type="text" class="form-control">
        </p>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Изображение</th>
                    <th ng-click="setOrder('name')">Наименование</th>
                    <th ng-click="setOrder('price')">Цена</th>
                    <th ng-click="setOrder('discount')">Скидка</th>
                    <th>Цена со скидкой</th>
                    <th>Дата завоза</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody ng-repeat="price in priceList | filter:priceSearch | orderBy:priceOrder:reverse" ng-init="myVar='/img/'; date='20171210T00:00:00'">
                <tr ng-show="price.discount>0" ng-class="'discount'" ng-class-odd="'odd'">
                    <td>{{$index+1}}</td>
                    <td><img ng-src="{{myVar+($index+1)}}" width="100px" height="100px"></td>
                    <td>{{price.name}}</td>
                    <td>{{price.price | currency}}</td>
                    <td><span ng-show="price.discount">{{price.discount * 100}}%</span>
                        <span ng-hide="price.discount">-</span></td>
                    <td>{{price.price*(1-price.discount)| currency}}</td>
                    <td>{{date | date:'yyyy-MM-dd'}}</td>
                    <td><button type="reset" ng-init="item=price.name" ng-click="resetEl(item)">Удалить {{item}}</button></td>
                </tr>
                <tr ng-hide="price.discount>0" ng-class-odd="'odd'">
                    <td>{{$index+1}}</td>
                    <td><img ng-src="{{myVar+($index+1)}}" width="100px" height="100px"></td>
                    <td>{{price.name}}</td>
                    <td>{{price.price | currency}}</td>
                    <td><span ng-show="price.discount">{{price.discount * 100}}%</span>
                        <span ng-hide="price.discount">-</span></td>
                    <td>{{price.price*(1-price.discount)| currency}}</td>
                    <td>{{date | date:'yyyy.MM.dd'}}</td>
                    <td><button type="reset" ng-init="item=price.name" ng-click="resetEl(item)">Удалить {{item}}</button></td>
                </tr>
            </tbody>
        </table>
        <form>
            <input type="text" placeholder="Наименование" ng-model="addTitle">
            <input type="text" placeholder="Цена" ng-model="addPrice">
            <input type="text" placeholder="Скидка" ng-model="addDiscount">
            <button type="submit" ng-click="addEl(addTitle,addPrice,addDiscount)">Добавить</button>
        </form>
        <h1>You entered: {{addTitle}}, {{addPrice}}, {{addDiscount}}</h1>

    </div>
</body>

</html>

//app.js
var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope) {

    $scope.priceTitle = 'Прайс-лист';
    $scope.priceDate = '2017-12-05';
    $scope.priceList = [
        {
            name: 'Апельсины',
            price: 2,
            discount: 0.1
        },
        {
            name: 'Яблоки',
            price: 1
        },
        {
            name: 'Бананы',
            price: 4,
            discount: 0.15

        },
        {
            name: 'Персики',
            price: 3
        }
    ]
    $scope.priceOrder = 'name';
    $scope.reverse = true;
    $scope.setOrder = function (order) {
        $scope.reverse = ($scope.priceOrder === order) ? !$scope.reverse : false;
        $scope.priceOrder = order;
    }
    $scope.addEl = function (addTitle, addPrice, addDiscount) {
        var element = {};
        element.name = addTitle;
        element.price = addPrice;
        element.discount = addDiscount;
        $scope.priceList.push(element);
    }
    console.log($scope.priceList);
    $scope.resetEl = function (item) {
        var index = $scope.priceList.findIndex(i=>i.name === item);
        $scope.priceList.splice(index, 1);
    }
}])

//style.css
.odd {
    background-color: rgba(229, 229, 229, 0.24);
}
.discount {
    background-color: rgba(255, 151, 151, 0.42);
}
