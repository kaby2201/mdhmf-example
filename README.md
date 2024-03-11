## MDHMF Example
The purpose of this project is to demonstrate how microfrontends can be integrated into legacy applications. The ``index.html`` file retains the original design, whereas the microfrontend (MF) features a modern design approach. The microfrontend is encapsulated, ensuring that its CSS styles do not affect elements outside of its own DOM.

The legacy application (represented by index.html) employs an outdated version of Bootstrap, while the car component utilizes the latest Bootstrap CSS version. The ``<mdh-car id="card" license="CF30540"></mdh-car>`` element accepts a license property. Whenever this property changes, the ``CarComponent`` is re-rendered to reflect the update.

#### Example:
https://kaby2201.github.io/mdhmf-example/
### Run the app:
```
npm i
npm run dev
```
