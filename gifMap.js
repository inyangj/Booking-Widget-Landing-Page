document.addEventListener('DOMContentLoaded', function () {
    const serviceContainers = document.querySelectorAll('.service-container');

    serviceContainers.forEach(container => {
      container.addEventListener('mouseover', function () {
        this.querySelector('.service-list').style.display = 'none';
        this.querySelector('.service-gif').style.display = 'block';
      });

      container.addEventListener('mouseout', function () {
        this.querySelector('.service-list').style.display = 'block';
        this.querySelector('.service-gif').style.display = 'none';
      });
    });
  });