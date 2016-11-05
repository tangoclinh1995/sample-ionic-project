describe("AccountCtrl", function() {
  var $scope;
  beforeEach(module("thehonorclub"));
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller("AccountCtrl", {$scope: $scope});

  }));

  it("Initial setting is correct", function() {
      expect($scope.settings).toEqual({enableFriends: true});

  });

});