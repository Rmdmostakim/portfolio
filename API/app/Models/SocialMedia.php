<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialMedia extends Model
{
protected $table = 'socialmedia';
protected $primaryKey = 'id';
protected $keyType = 'int';
public $incrementing = true;
public $timestamps = false;
}
