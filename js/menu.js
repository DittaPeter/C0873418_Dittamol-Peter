

$(document).ready(function() {
    var html = `<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About us</a></li>
        <li><a href="team.html">Our Team</a></li>
        <li><a href="specials.html">Specials</a></li>
        <li><a href="training.html">Training</a></li>
        <li><a href="media.html">Media</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li>
            <div class="dropdown">
                <button class="dropbtn">Reports
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="http://185.113.4.41:7240/WEB1V.html">Products</a>
                    <a href="http://185.113.4.41:7240/WEB2V.html">Orders</a>
                    <a href="http://185.113.4.41:7240/WEB3V.html">Order Totals</a>
                    <a href="http://185.113.4.41:7240/WEB4V.html">Product Inventory</a>
                </div>
            </div>
        </li>
    </ul>
    </nav>`;

    $('#menu').append(html);
 
  });