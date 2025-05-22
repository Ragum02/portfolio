<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $useremail;
    public $subject;
    public $usermessage;
  public function __construct(string $useremail, string $subject, string $message)
    {
        $this->useremail = $useremail;
        $this->subject = $subject;
        $this->usermessage = $message;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: $this->useremail,
            replyTo: [$this->useremail],
            subject: $this->subject
        );
    }

    public function content(): Content
    {
        return new Content(
            text: 'contact',
            with: [
                'useremail' => $this->useremail,
                'subject' => $this->subject,
                'usermessage' => $this->usermessage,
            ]
        );
    }
}
