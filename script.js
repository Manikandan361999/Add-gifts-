let giftCounter = 1;

function addGift() {
    const giftList = document.getElementById('giftList');

    // Create a new gift item
    const newGiftItem = document.createElement('div');
    newGiftItem.innerHTML = `<input type="text" placeholder="Gift ${giftCounter}" class="gift-input">`;
    giftList.appendChild(newGiftItem);

    giftCounter++;
}
