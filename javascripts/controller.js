function ListaComprasController($scope) {
    $scope.itens = [
        {id: 1, produto: 'Leite', quantidade: 2, comprado: false},
        {id: 2, produto: 'Cerveja', quantidade: 12, comprado: false}
    ];
    
    $scope.adicionaItem = function () {
        var quant = 2;
        $scope.itens.push({id: quant + 1 ,produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
    };
}
