<?php 

namespace App\Actions\Publication; 

use App\Models\Publication; 
use Illuminate\Support\Facades\Storage; 
use Illuminate\Http\UploadedFile; 

class UpdatePublicationAction
{
    /**
     * Update Publication 
     *
     * @param array $publication
     * 
     * @return Publication
     */
    public function update(Publication $publication, array $request): Publication
    {
        if (isset($request['published_file']) AND $request['published_file'] instanceof UploadedFile) {
            $fileName = str()->uuid() . '.' . $request['published_file']->getClientOriginalExtension(); 
            Storage::put($fileName, file_get_contents($request['published_file']));
            $request['published_file'] = $fileName; 
        } else {
            unset($request['published_file']); 
        }

        $publication->update($request); 

        return $publication; 
    }
}