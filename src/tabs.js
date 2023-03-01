const tabsTitle = document.querySelectorAll('.tabs__title');
const tabsBody = document.querySelectorAll(`[data-body]`)

tabsTitle.forEach(elem => {
	elem.addEventListener('click', function () {
		tabsTitle.forEach(tab => {
			tab.classList.remove('tabs__title_active')
		})
		elem.classList.add('tabs__title_active')
		if (elem.dataset.title === "calc") {
			resetTabsBody();
			const currentTabs = document.querySelector(`[data-body="${elem.dataset.title}"]`);
			currentTabs.classList.add('tabs__body_active');
		}
		if (elem.dataset.title === "taimer") {
			resetTabsBody();
			const currentTabs = document.querySelector(`[data-body="${elem.dataset.title}"]`);
			currentTabs.classList.add('tabs__body_active');
		}
	})
})

function resetTabsBody() {
	tabsBody.forEach(elem => {
		elem.classList.remove('tabs__body_active')
	})
}