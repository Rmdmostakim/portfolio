<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mails extends Model
{
    protected $table = 'mails';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $incrementing = true;
    public $timestamps = false;
}
