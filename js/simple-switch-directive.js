angular.module('simpleSwitch', [])

.directive('simpleSwitch', function() {
    return {
        restrict: 'E',
        replace: 'true',
        template: function(element, attrs) {
            var html = [];
            html.push('<span class="simple-switch" ng-click="');
            html.push(attrs.ngClick ? attrs.ngClick : attrs.ngModel + ' = !' + attrs.ngModel);
            html.push('" ng-class="{\'active\': ' + attrs.ngModel + '}">');
            html.push('<span class="simple-switch--toggle"></span>');
            html.push('<input type="checkbox"');
            html.push(attrs.name ? ' name="' + attrs.name + '"' : '');
            html.push(attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : '');
            html.push(' />');
            html.push('</span>');
            html = html.join('');
            return html;
        }
    }
});
