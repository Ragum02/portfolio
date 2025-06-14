<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMailRequest;
use App\Mail\ContactMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class ContactMailController extends Controller
{
    public function sendmail(ContactMailRequest $request)
    {
        $validated = $request->validated();


        Mail::to(env('MAIL_USERNAME'))->send(
            new ContactMail(
                $validated['useremail'],
                $validated['subject'],
                $validated['message']
            )
        );

        return response()->json(['success' => true]);
    }
}
