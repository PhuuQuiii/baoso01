import $ from "jquery";
import { coloraf } from "./coloraf";

window.onclick = function(event) {
  // Lấy tham chiếu đến phần tử dropdown
  var dropdown = document.getElementById('myDropdown');

  // Kiểm tra xem phần tử được nhấp có className là "dropbtn" hay không
  if (event.target.matches('.dropdown')) {
    // Toggle class "show" của dropdown
    dropdown.classList.toggle("show");
  } else {
    // Nếu phần tử được nhấp không phải là nút "dropbtn", kiểm tra và ẩn các dropdown khác nếu có
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}