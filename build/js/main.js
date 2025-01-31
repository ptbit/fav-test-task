"use strict";

//TDS
(function () {
  var url = new URL(window.location.href);
  var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2', 'param3', 'param4', 'creative_type', 'creative_id'];
  var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

  if (url.searchParams.has('redirectUrl')) {
    var redirectUrl = new URL(url.searchParams.get('redirectUrl'));
    if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
      //если ссылка в ссылка redirectUrl корректная
      localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
    }
  }

  params.forEach(function (param) {
    if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
  });
  linkParams.forEach(function (linkParam) {
    if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
  });
  window.addEventListener('click', function (e) {
    var link,
      parent = e.target.closest('a');
    if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
      return;
    }
    if (parent) {
      e.preventDefault();
      var affid = localStorage.getItem('affid');
      var cpaid = localStorage.getItem('cpaid');
      if (localStorage.getItem("redirectUrl")) {
        link = new URL(localStorage.getItem("redirectUrl"));
      } else {
        link = new URL(parent.href);
        if (affid && cpaid) {
          link.pathname = '/' + affid + '/' + cpaid;
        }
      }
      params.forEach(function (param) {
        if (url.searchParams.has(param)) {
          link.searchParams.set(param, localStorage.getItem(param));
        }
      });
      document.location.href = link;
    }
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGFyYW1zIiwibGlua1BhcmFtcyIsInNlYXJjaFBhcmFtcyIsImhhcyIsInJlZGlyZWN0VXJsIiwiZ2V0IiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZm9yRWFjaCIsInBhcmFtIiwibGlua1BhcmFtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsaW5rIiwicGFyZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsInByZXZlbnREZWZhdWx0IiwiYWZmaWQiLCJnZXRJdGVtIiwiY3BhaWQiLCJwYXRobmFtZSIsInNldCIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsQ0FBQyxZQUFZO0VBQ1gsSUFBSUEsR0FBRyxHQUFHLElBQUlDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztFQUN2QyxJQUFJQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztFQUNqSyxJQUFJQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzs7RUFFckMsSUFBSU4sR0FBRyxDQUFDTyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUNyQyxJQUFJQyxXQUFXLEdBQUcsSUFBSVIsR0FBRyxDQUFDRCxHQUFHLENBQUNPLFlBQVksQ0FBQ0csR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTlELElBQUlELFdBQVcsQ0FBQ0wsSUFBSSxDQUFDTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUNDLE1BQU0sS0FBSyxDQUFDLElBQUlILFdBQVcsQ0FBQ0YsWUFBWSxDQUFDRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDakY7TUFDQUcsWUFBWSxDQUFDQyxPQUFPLENBQUMsYUFBYSxFQUFFTCxXQUFXLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0Q7RUFDSjs7RUFFQUMsTUFBTSxDQUFDVSxPQUFPLENBQUMsVUFBVUMsS0FBSyxFQUFFO0lBQzVCLElBQUloQixHQUFHLENBQUNPLFlBQVksQ0FBQ0MsR0FBRyxDQUFDUSxLQUFLLENBQUMsRUFBRUgsWUFBWSxDQUFDQyxPQUFPLENBQUNFLEtBQUssRUFBRWhCLEdBQUcsQ0FBQ08sWUFBWSxDQUFDRyxHQUFHLENBQUNNLEtBQUssQ0FBQyxDQUFDO0VBQzdGLENBQUMsQ0FBQztFQUVGVixVQUFVLENBQUNTLE9BQU8sQ0FBQyxVQUFVRSxTQUFTLEVBQUU7SUFDcEMsSUFBSWpCLEdBQUcsQ0FBQ08sWUFBWSxDQUFDQyxHQUFHLENBQUNTLFNBQVMsQ0FBQyxFQUFFSixZQUFZLENBQUNDLE9BQU8sQ0FBQ0csU0FBUyxFQUFFakIsR0FBRyxDQUFDTyxZQUFZLENBQUNHLEdBQUcsQ0FBQ08sU0FBUyxDQUFDLENBQUM7RUFDekcsQ0FBQyxDQUFDO0VBRUZmLE1BQU0sQ0FBQ2dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDLEVBQUU7SUFDMUMsSUFBSUMsSUFBSTtNQUNKQyxNQUFNLEdBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBRWxDLElBQUlGLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLDZCQUE2QixFQUFFO01BQy9EO0lBQ0o7SUFFQSxJQUFJSCxNQUFNLEVBQUU7TUFDUkYsQ0FBQyxDQUFDTSxjQUFjLEVBQUU7TUFDbEIsSUFBSUMsS0FBSyxHQUFHYixZQUFZLENBQUNjLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDekMsSUFBSUMsS0FBSyxHQUFHZixZQUFZLENBQUNjLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFFekMsSUFBSWQsWUFBWSxDQUFDYyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDckNQLElBQUksR0FBRyxJQUFJbkIsR0FBRyxDQUFDWSxZQUFZLENBQUNjLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztNQUN2RCxDQUFDLE1BQU07UUFDSFAsSUFBSSxHQUFHLElBQUluQixHQUFHLENBQUNvQixNQUFNLENBQUNqQixJQUFJLENBQUM7UUFDM0IsSUFBSXNCLEtBQUssSUFBSUUsS0FBSyxFQUFFO1VBQ2hCUixJQUFJLENBQUNTLFFBQVEsR0FBRyxHQUFHLEdBQUdILEtBQUssR0FBRyxHQUFHLEdBQUdFLEtBQUs7UUFDN0M7TUFDSjtNQUVBdkIsTUFBTSxDQUFDVSxPQUFPLENBQUMsVUFBVUMsS0FBSyxFQUFFO1FBQzVCLElBQUloQixHQUFHLENBQUNPLFlBQVksQ0FBQ0MsR0FBRyxDQUFDUSxLQUFLLENBQUMsRUFBRTtVQUM3QkksSUFBSSxDQUFDYixZQUFZLENBQUN1QixHQUFHLENBQUNkLEtBQUssRUFBRUgsWUFBWSxDQUFDYyxPQUFPLENBQUNYLEtBQUssQ0FBQyxDQUFDO1FBQzdEO01BQ0osQ0FBQyxDQUFDO01BRUZlLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHZ0IsSUFBSTtJQUNqQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9URFNcclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgdmFyIHBhcmFtcyA9IFsnbCcsICd1dG1fc291cmNlJywgJ3V0bV9tZWRpdW0nLCAndXRtX2NhbXBhaWduJywgJ3V0bV90ZXJtJywgJ3V0bV9jb250ZW50JywgJ3BhcmFtMScsICdwYXJhbTInLCAncGFyYW0zJywgJ3BhcmFtNCcsICdjcmVhdGl2ZV90eXBlJywgJ2NyZWF0aXZlX2lkJ107XHJcbiAgdmFyIGxpbmtQYXJhbXMgPSBbJ2FmZmlkJywgJ2NwYWlkJ107IC8vINC40YnQtdC8INCyIHVybCByZWRpcmVjdFVybCDQsiB1cmw6XHJcblxyXG4gIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygncmVkaXJlY3RVcmwnKSkge1xyXG4gICAgICB2YXIgcmVkaXJlY3RVcmwgPSBuZXcgVVJMKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdyZWRpcmVjdFVybCcpKTtcclxuXHJcbiAgICAgIGlmIChyZWRpcmVjdFVybC5ocmVmLm1hdGNoKC9cXC8vZykubGVuZ3RoID09PSA0ICYmIHJlZGlyZWN0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2wnKSkge1xyXG4gICAgICAgICAgLy/QtdGB0LvQuCDRgdGB0YvQu9C60LAg0LIg0YHRgdGL0LvQutCwIHJlZGlyZWN0VXJsINC60L7RgNGA0LXQutGC0L3QsNGPXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVkaXJlY3RVcmwnLCByZWRpcmVjdFVybC5ocmVmKTsgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGC0L7Rh9C60L7QuSDQstGF0L7QtNCwINC00L7QvNC10L0g0YEg0L/RgNC+0YLQvtC60L7Qu9C+0Lwg0LjQtyByZWRpcmVjdFVybFxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KHBhcmFtKSk7XHJcbiAgfSk7XHJcblxyXG4gIGxpbmtQYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAobGlua1BhcmFtKSB7XHJcbiAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhsaW5rUGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaW5rUGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KGxpbmtQYXJhbSkpO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgbGluayxcclxuICAgICAgICAgIHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgIT09ICdodHRwczovL3Rkcy5mYXZiZXQucGFydG5lcnMnKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciBhZmZpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZmZpZCcpO1xyXG4gICAgICAgICAgdmFyIGNwYWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NwYWlkJyk7XHJcblxyXG4gICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpIHtcclxuICAgICAgICAgICAgICBsaW5rID0gbmV3IFVSTChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGluayA9IG5ldyBVUkwocGFyZW50LmhyZWYpO1xyXG4gICAgICAgICAgICAgIGlmIChhZmZpZCAmJiBjcGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICBsaW5rLnBhdGhuYW1lID0gJy8nICsgYWZmaWQgKyAnLycgKyBjcGFpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkge1xyXG4gICAgICAgICAgICAgICAgICBsaW5rLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgICAgIH1cclxuICB9KTtcclxufSkoKTsiXX0=
