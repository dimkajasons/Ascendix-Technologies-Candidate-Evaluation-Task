function initMap() {
    // The location of Uluru
    var uluru = { lat: 49.973824, lng: 36.226073 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 10, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

const Building = {
    data: props,
    buildingQuontity: props.length,
    render: function() {
        for (let i = 0; i <props.length; i++) {
            let renderWithParams = _.template(templates.mainContainer);
            let content = renderWithParams({
                name: this.data[i]['Name'],
                address: this.data[i]['Address'],
                propertyType: this.data[i]['Poperty Type'],
                propertyClass: this.data[i]['Property Class'],
                floors: this.data[i]['Floors'],
                totalArea: this.data[i]['Total Building Area'],
                tenancy: this.data[i]['Tenancy'],
                noOfTenant: this.data[i]['No. of Tenant'],
                website: this.data[i]['Website'],
                year: this.data[i]['Year Built'],
                description: this.data[i]['Description'].join('\n'),
                availabilities: this.data[i]['Availabilities']
            })
            let element = document.createElement('div');
            element.innerHTML = content;
            document.querySelector('.main-container').appendChild(element);
        }
    }
}

Building.render();
