<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	protected $fillable = ['title', 'content', 'description', 'status', 'slug', 'blog_img'];
	protected $hidden = ['updated_at'];
	use HasFactory;
}