import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, publication }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        judul : publication.judul,
        author: publication.author,
        description: publication.description,
        publish_date: publication.publish_date,
        published_file: null,
        _method: "PUT",
    });

    const doSubmit = (e) => {
        e.preventDefault();
        post(
            route("publication.update", {
                publication: publication.id,
            })
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Form Edit Publikasi
                </h2>
            }
        >
            <Head title="Publikasi" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5 px-3">
                        <div className="mb-3 border-b pb-3">
                            <Link
                                href={route("publication.index")}
                                className="btn py-1 px-2 text-sm bg-green-600 text-white rounded-lg"
                            >
                                Kembali
                            </Link>
                        </div>
                        <form onSubmit={doSubmit}>
                            <div className="relative overflow-x-auto mb-3">
                                <div className="mb-4">
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="judul"
                                            value="judul"
                                        />

                                        <TextInput
                                            id="judul"
                                            type="text"
                                            name="judul"
                                            value={data.judul}
                                            className="mt-1 block w-full"
                                            autoComplete="judul"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("judul", e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.judul}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="author"
                                            value="Penulis"
                                        />

                                        <TextInput
                                            id="author"
                                            type="text"
                                            name="author"
                                            value={data.author}
                                            className="mt-1 block w-full"
                                            autoComplete="author"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "author",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.author}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="description"
                                            value="Deskripsi"
                                        />

                                        <TextArea
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={data.description}
                                            className="mt-1 block w-full"
                                            autoComplete="title"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="publish_date"
                                            value="Tanggal Publikasi"
                                        />

                                        <TextInput
                                            id="publish_date"
                                            type="date"
                                            name="publish_date"
                                            value={data.publish_date}
                                            className="mt-1 block w-full"
                                            autoComplete=""
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "publish_date",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.publish_date}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="published_file"
                                            value="File PDF"
                                        />

                                        <input
                                            className="block mt-1"
                                            type="file"
                                            onChange={(e) => {
                                                const [file] = e.target.files;
                                                setData("published_file", file);
                                            }}
                                        />

                                        <InputError
                                            message={errors.published_file}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="bg-blue-700 text-white rounded py-2 px-5">
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
