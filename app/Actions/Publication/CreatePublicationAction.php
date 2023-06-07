<?php 

namespace App\Actions\Publication; 

use App\Models\Publication; 
use Illuminate\Support\Facades\Storage; 
use Illuminate\Http\UploadedFile; 

class CreatePublicationAction
{
    /**
     * Create Publication 
     *
     * @param array $publication
     * 
     * @return Publication
     */
    public function create(array $publication): Publication 
    {
        if (isset($publication['published_file']) AND $publication['published_file'] instanceof UploadedFile) {
            $fileName = str()->uuid() . '.' . $publication['published_file']->getClientOriginalExtension(); 
            Storage::put($fileName, file_get_contents($publication['published_file']));
            $publication['published_file'] = $fileName; 
        }

        return Publication::create($publication); 
    }
}