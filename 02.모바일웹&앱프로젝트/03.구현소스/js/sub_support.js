// support

Vue.component("sup-com",{
    template:`
    <div class="support">
        <div class="sup_tit">
            <h2>Support</h2>
        </div>
        <div class="sup_cont">
            <div class="cont1 cont">
                <h3>My purchase arrived damaged; what do i do?</h3>
                <p>If things should go wrong for any reason, here is what you do. If your order arrived damaged, please inform us right away and send us a photo of the damage, so we can send you a replacement. Shipping charges will only be refunded in the case that the error was our responsibility. If you give us the wrong address or move to a new location without notifying us and your package is returned, we will charge you for shipping it to the correct location.</p>
            </div>
            <div class="cont2 cont">
                <h3>How do refunds work?</h3>
                <p>All refunds will be credited to the credit card used in your purchase. We will do everything we can to refund quickly and you will be notified of your refund by e-mail.</p>
            </div>
            <div class="cont3 cont">
                <h3>I'm not satisfied, where do i vent my frustrations?</h3>
                <p>If you are not satisfied with our service please let us know. We will replace, repair, rebuild, repackage, resend, redo, re-stamp, and or reseal anything that disappears into shipping oblivion. Contact us at shop(a)MUSIUM</p>
            </div>
        </div>
    </div>
    `,
})
    
new Vue({
    el:".sub_support",
})