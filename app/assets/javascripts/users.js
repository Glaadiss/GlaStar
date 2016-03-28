var ready = function () {

    /**
     * When the send message link on our home page is clicked
     * send an ajax request to our rails app with the sender_id and
     * recipient_id
     */

    $('.start-conversation').click(function (e) {
        e.preventDefault();

        var sender_id = $(this).data('sid');
        var recipient_id = $(this).data('rip');

        $.post("/conversations", { sender_id: sender_id, recipient_id: recipient_id }, function (data) {
            chatBox.chatWith(data.conversation_id);
        });
    });


    /**
     * When a conversation link is clicked show up the respective
     * conversation chatbox
     */

    $('a.conversation').click(function (e) {
        e.preventDefault();

        var conversation_id = $(this).data('cid');
        chatBox.chatWith(conversation_id);
    });

}

$(document).ready(ready);
$(document).on("page:load", ready);