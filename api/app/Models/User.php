<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class User extends Model implements AuthenticatableContract, AuthorizableContract {
	use Authenticatable, Authorizable;
	
	protected $guarded = ['id'];
	protected $fillable = ['username' , 'fisrt_name', 'last_name', 'password', 'email', 'address', 'zip_code'];
	public $timestamps = false;
}

