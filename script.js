// Sample menu data
const menuItems = [
    { name: 'Asian Dolce Latte', description: 'Double-shots of the premium, dark-roasted StarBroke Espresso Roast, combine with the uniquely developed dolce sauce. StarBroke celebrates the unique flavor of Asia by introducing Asian Dolce Latte, the new smooth and velvety textured latte with an Asian twist. Inspired by how coffee is drank in many parts of Asia, strong yet smooth and flavored, Asian Dolce Latte has a delicious local flavor in every sip.', imageUrl: 'https://www.starbucks.com.my/media/d11d0620-6c8f-4633-8ed4-d787716e6c92.jpg' },
    { name: 'Caffe Americano', description: 'Rich, full-bodied espresso with hot water in true European style. In Europe, coffee is essentially espresso – which, in America, isn’t very much coffee. To create a caffe americano – a coffee that satisfies the American preference for more sips in every cup – Europeans simply add hot water to their espresso. While the americano is similar in strength and taste to American-style brewed coffee, there are subtle differences achieved by pulling a fresh shot of espresso for the beverage base. The best way to discover these nuances, of course, is to try a cup yourself.', imageUrl: 'https://www.starbucks.com.my/media/e2c05348-2b1a-4767-989b-ca109ad78e8b.jpg' },
    { name: 'Caffe Latte', description: 'Rich, full-bodied espresso in steamed milk, lightly topped with foam. This is the original coffeehouse classic. And like most classics, part of its appeal comes from its simplicity. A caffe latte is simply a shot or two of bold, tasty espresso with fresh, sweet steamed milk over it. Some prefer to add syrup or extra espresso to the recipe. Some maintain that it is entirely perfect as is.', imageUrl: 'https://www.starbucks.com.my/media/fb357572-94c6-4543-9cfe-994e0b92079c.jpg'},
    { name: 'Caffe Mocha', description: 'Espresso with bittersweet mocha sauce and steamed milk. Topped with sweetened whipped cream. There’s no question chocolate and coffee are flavors that meant for each other. Both are rich and full of depth. Where one is creamy, the other is roasty. They complement each other perfectly. And when they come together under a fluffy cloud of sweetened whipped cream, you’ll wish their union would last forever.', imageUrl: 'https://www.starbucks.com.my/media/5a3687f4-cfd2-48c7-b91a-4a684e67fd97.jpg'},
    { name: 'Cappuccino', description: 'Espresso with steamed milk, topped with a deep layer of foam. With less milk than a latte, cappuccino offers a stronger espresso flavor and a luxurious texture. To make it properly requires much skill and attentiveness. Arguably the most important part is frothing the foam to velvety perfection as the milk steams – something our baristas take great care to achieve. The milky moustache that clings to your upper lip is proof we’ve made yours right. And may we say, you wear it well.', imageUrl: 'https://www.starbucks.com.my/media/b26a482d-8f87-4cec-b4a7-d729d3557e4b.jpg'},
    { name: 'Caramel Macchiato', description: 'A StarBroke original. Freshly steamed milk with vanilla-flavored syrup is marked with espresso, and finished with caramel sauce. Scores of people are passionate devotees of this signature beverage. So bewitched are they, you’d think it was some kind of magical elixir. Well there’s no hocus pocus here. We’ll tell you exactly what goes into it: creamy vanilla-flavored syrup, freshly steamed milk with a topping of velvety-rich foam, an intense hit of our Espresso Roast, a finishing of buttery caramel drizzle … okay, we take it back. That does sounds like magic to us. (And it tastes even better.)', imageUrl: 'https://www.starbucks.com.my/media/d86ecdd7-cba8-44e1-8869-31385c962cd1.webp'},
    { name: 'Cocoa Cappuccino', description: 'Dark, rich espresso with bittersweet mocha sauce lies in wait under a smoothed and stretched layer of thick foam. With less milk than a latte, cappuccino offers a stronger espresso flavor and a luxurious texture. To make it properly requires much skill and attentiveness. Arguably the most important part is frothing the foam to velvety perfection as the milk steams – something our baristas take great care to achieve. The milky moustache that clings to your upper lip is proof we’ve made yours right. And may we say, you wear it well.', imageUrl: 'https://www.starbucks.com.my/media/d20a2eea-944f-467f-baeb-4c0e2f5b000c.webp'},
    { name: 'Coffee by the Press', description: 'Find a StarBroke whole bean you like? Get our baristas to brew it for you in our coffee press. The coffee press is a classic, straightforward brewing method that produces a boldly flavorful cup. To brew, fresh coffee grounds are fully immersed in hot water. The mesh filter encourages an even extraction that releases flavorful oils into the cup and creates rich, full-bodied cup.', imageUrl: 'https://www.starbucks.com.my/media/b7e4be84-fd8d-4a2a-a8c6-fb058c3b7bb3.jpg'},
    { name: 'Cold Brew', description: 'Slow-steeped, small-batch and super smooth. We use a unique craft-brewing process to create a super smooth tasting coffee. While making our Cold Brew, the coffee never comes into contact with hot water. Instead, the coffee is slow-steeped in cool water for more than 10 hours and is handcrafted in small batches each day. To create our signature recipe, our team spent months experimenting with different brew times and coffee varietals. We specifically developed the Starbucks® Cold Brew Blend to heighten the rich, naturally sweet flavor created during the cold brewing process. The blend incorporates African and Latin American coffees.', imageUrl: 'https://www.starbucks.com.my/media/0bc8a316-2a5b-4307-89e9-0028940860d2.webp'},
    { name: 'Cold Foam Iced Espresso', description: 'Our StarBroke® Signature Espresso lies in wait under a smooth layer of frothed cold foam. Discover the groundbreaking innovation of velvety-smooth cold foam, available in our new Cold Foam Iced Espresso. Layering luscious smooth cold foam on top of slightly sweetened StarBroke Espresso, the StarBroke® Cold Foam Iced Espresso will impress discerning coffee lovers with its full-bodied taste and deep coffee notes. Savor each sip as the flavor and texture of the beverage evolves when you mix the creamy foam with the chilled espresso.', imageUrl: 'https://www.starbucks.com.my/media/3b4090a2-e2bb-497b-9407-8a596e4f9729.webp'},
    { name: 'DoubleShot® Ice Shaken Espresso', description: 'Two fresh shots of espresso, hand shaken with classic syrup and ice, finished with low fat milk mixed with sweetened whipped cream. Our only hand-shaken espresso drink, it melds the flavors of the rich, full-bodied espresso you love and is chilled and mellowed with a touch of milk and then lightly sweetened. All with tiny bubbles of frothy foam.', imageUrl: 'https://www.starbucks.com.my/media/7f39be17-11d6-4b84-bca1-4165a20df80e.jpg'},
    { name: 'Matcha Cold Foam Iced Americano', description: 'A dream come true for coffee and tea lovers – StarBroke is reimagining the classic Iced Americano with the infusion of matcha – in the format of meringue-like, earthy Matcha Cold Foam. Made with nonfat milk, this layer of smooth Matcha Cold Foam atop the classic Iced Americano instantly intrigues the palate with the contrasting yet complementing flavors of Americano and Matcha. The Matcha Cold Foam Iced Americano is available cold only.', imageUrl: 'https://www.starbucks.com.my/media/d0e3214a-acfb-4bad-9714-95685507324d.webp'},
    { name: 'Vanilla Sweet Cream Cold Brew', description: 'Cold Brew topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup. We use a unique craft-brewing process to create a super smooth tasting coffee. While making our Cold Brew, the coffee never comes into contact with hot water. Instead, the coffee is slow-steeped in cool water for more than 10 hours and is handcrafted in small batches each day. To create our signature recipe, our team spent months experimenting with different brew times and coffee varietals. We specifically developed the StarBroke® Cold Brew Blend to heighten the rich, naturally sweet flavor created during the cold brewing process. The blend incorporates African and Latin American coffees.', imageUrl: 'https://www.starbucks.com.my/media/6fa0bac1-feb4-4c79-b7aa-cc9c3647a6bb.jpg'}
];

// Function to create menu items and handle clicks
function createMenuItems() {
    const menuGrid = document.querySelector('.menu-grid');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `<img src="${item.imageUrl}" alt="${item.name}" class="menu-image">
                              <h3>${item.name}</h3>`;

        menuItem.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `<div class="modal-content">
                                  <img src="${item.imageUrl}" alt="${item.name}" class="modal-image">
                                  <div class="modal-description">
                                    <h3>${item.name}</h3>
                                    <p style="white-space: pre-line;">${item.description}</p>
                                  </div>
                              </div>`;
            document.body.appendChild(modal);

            // Close the modal when clicking outside of it
            modal.addEventListener('click', event => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        });

        menuGrid.appendChild(menuItem);
    });
}


// Function to close the modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Call the function to create menu items after the page loads
document.addEventListener('DOMContentLoaded', createMenuItems);


/*contact js*/
// Function to validate email address
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate contact number
function isValidContactNumber(contactNumber) {
    // Regular expression for 9-digit numeric validation
    const contactNumberPattern = /^[0-9]{9}$/;
    return contactNumberPattern.test(contactNumber);
}

// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const email = document.getElementById('email').value;

    // Validate name
    if (name.trim() === '') {
        displayValidationMessage('Please enter your name.');
        return;
    }

    // Validate contact number
    if (!isValidContactNumber(contactNumber)) {
        displayValidationMessage('Please enter a valid 9-digit contact number.');
        return;
    }

    // Validate email
    if (!isValidEmail(email)) {
        displayValidationMessage('Please enter a valid email address.');
        return;
    }

    // If all validations pass, show a success popup
    showPopup('Form submitted successfully!');

    // Clear form fields after submission (optional)
    document.getElementById('name').value = '';
    document.getElementById('contactNumber').value = '';
    document.getElementById('email').value = '';
}

// Function to show a popup message
function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    // Remove the popup after a few seconds (optional)
    setTimeout(() => {
        popup.remove();
    }, 3000); // Popup will disappear after 3 seconds (3000 milliseconds)
}

// Call the function to create menu items after the page loads
document.addEventListener('DOMContentLoaded', createMenuItems);

// Array of image URLs for the slideshow
const slideshowImages = [
    "https://www.starbucks.com.my/media/0d820d53-1119-42ba-a4d9-e085635a1238.jpg",
    "https://www.starbucks.com.my/media/ae29dd46-90d4-4d5a-aec8-901e70e5b7ed.png",
    "https://www.starbucks.com.my/media/8bd3faaf-bc5f-43b2-a8b3-06394dac0aec.jpg",
    "https://www.starbucks.com.my/media/4588c531-46d5-4517-9465-68f6104fdec2.webp"
];

const slideshowContainer = document.querySelector(".slideshow-container");

function createSlideshow() {
    for (let i = 0; i < 4; i++) {
        const card = document.createElement("div");
        card.className = "card";
        const image = document.createElement("img");
        image.src = slideshowImages[i];
        image.width = 350; // Set the width of the image
        image.height = 200; // Set the height of the image
        card.appendChild(image);
        slideshowContainer.appendChild(card);
    }

    setInterval(() => {
        const firstCard = slideshowContainer.querySelector(".card");
        const clone = firstCard.cloneNode(true);
        slideshowContainer.appendChild(clone);
        firstCard.remove();
    }, 2000);
}

// Call the function to create the slideshow after the page loads
document.addEventListener("DOMContentLoaded", createSlideshow);