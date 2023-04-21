$(document).ready(function() {
    // Fetch the JSON data
    $.getJSON("/constants/employee.json", function(data) {
      // Loop through the data and generate HTML markup
      $.each(data, function(index, employee) {
        var html = '<article class="team-members team-member-1"><figure>';
        html += '<img src="' + employee.image + '" alt="Team member 1"><aside>';
        html += '<h3>' + employee.name + '</h3>';
        html += '<p>' + employee.bio + '</p>';
        html += '<h4>' + employee.title + '</h4>';
        html += '	</aside></figure></article>';
        $('#employee').append(html);
      });
    });
  });