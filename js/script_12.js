                    <thead>
                        <tr>
                            <th>№</th>
                            <th>
                                <span ng-click="sortSet('name')">Наименование</span>
                                <i class="fa fa-sort" ng-hide="sortBy=='name'"></i>
                                <i class="fa fa-sort-asc" ng-hide="(sortBy=='name' && sortRev == true)||sortBy!='name'"></i>
                                <i class="fa fa-sort-desc" ng-hide="(sortBy=='name' && sortRev == false)||sortBy!='name'"></i>
                            </th>
                            <th>
                                <span ng-click="sortSet('price')">Цена</span>
                                <i class="fa fa-sort" ng-hide="sortBy=='price'"></i>
                                <i class="fa fa-sort-asc" ng-hide="(sortBy=='price' && sortRev == true)||sortBy!='price'"></i>
                                <i class="fa fa-sort-desc" ng-hide="(sortBy=='price' && sortRev == false)||sortBy!='price'"></i>
                            </th>
                            <th>
                                <span ng-click="sortSet('discount')">Скидка</span>
                                <i class="fa fa-sort" ng-hide="sortBy=='discount'"></i>
                                <i class="fa fa-sort-asc" ng-hide="(sortBy=='discount' && sortRev == true)||sortBy!='discount'"></i>
                                <i class="fa fa-sort-desc" ng-hide="(sortBy=='discount' && sortRev == false)||sortBy!='discount'"></i>
                            </th>
                            <th>
                                <span ng-click="sortSet('price2')">Цена со скидкой</span>
                                <i class="fa fa-sort" ng-hide="sortBy=='price2'"></i>
                                <i class="fa fa-sort-asc" ng-hide="(sortBy=='price2' && sortRev == true)||sortBy!='price2'"></i>
                                <i class="fa fa-sort-desc" ng-hide="(sortBy=='price2' && sortRev == false)||sortBy!='price2'"></i>
                            </th>
                        </tr>
                    </thead>
