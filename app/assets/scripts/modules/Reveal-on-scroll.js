import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentaje = offset;
    this.hideInitally();
    this.crateWaypoints();
  }

  hideInitally() {
    this.itemsToReveal.addClass("reveal-item");
  }

  crateWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentaje
      });
    });
  }
}

export default RevealOnScroll;