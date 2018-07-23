const templates = {
    mainContainer:
        `<div class="building-card-container">
        <div class="building-card-title">
            <i class="far fa-building fa-3x"></i>
            <span class="building-name"><%= name %></span>
        </div>
        <div class="address"><%= address %></div>
        <div class="photo-map">
            <img class="building-photo" src="./img/SkylonTower.jpg" alt="" height="350">
            <div id="map"></div>
        </div>
        <div class="props-container">
            <h2 class="h-props">Property detalis</h2>
            <table class="props-table">
                <tr>
                    <th class="prop-name">Property Type:</th>
                    <th class="prop-value"><%= propertyType %></th>
                    <th class="prop-name">Website:</th>
                    <th class="prop-value"><a href="<%= website %>"><%= website %></a></th>
                </tr>
                <tr>
                    <th class="prop-name">Total Building Area:</th>
                    <th class="prop-value"><%= totalArea %></th>
                    <th class="prop-name">Property Class:</th>
                    <th class="prop-value"><%= propertyClass %></th>
                </tr>
                <tr>
                    <th class="prop-name">Tenancy:</th>
                    <th class="prop-value"><%= tenancy %></th>
                    <th class="prop-name">Year Built:</th>
                    <th class="prop-value"><%= year %></th>
                </tr>
                <tr>
                    <th class="prop-name">No. of Tetant</th>
                    <th class="prop-value"><%= noOfTenant %></th>
                    <th class="prop-name">Floors</th>
                    <th class="prop-value"><%= floors %></th>
                </tr>
            </table>
            <div class="description">
                <span class="prop-name">Description: </span><%= description %>
            </div>
            <div class="availabilities">
                <span>
                    <i class="far fa-calendar-alt fa-2x"></i>
                    <span class="table-name">Availabilities</span>
                </span>
                <span class="table-records">4 records</span>
            </div>
            <table class="availabilities-table">
                <tr class="titles">
                    <th>Unit Name/Number</th>
                    <th>Record Type</th>
                    <th>Available Area</th>
                </tr>

                <% for (let i = 0; i < availabilities.length; i++) { %>
                    <tr>
                        <td><%= availabilities[i]['Unit Name/Number'] %></td>
                        <td><%= availabilities[i]['Record Type'] %></td>
                        <td><%= availabilities[i]['Available Area'] %></td>
                    </tr>
                <% } %>
            </table>
        </div>  
    </div>`
}

