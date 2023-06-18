<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use HasFactory;

    public $fillable = [
        'judul', 
        'description', 
        'author', 
        'publish_date', 
        'published_file', 
    ];
}
