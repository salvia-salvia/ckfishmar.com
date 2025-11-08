"use client";
// import { FishParams, Language, MultiLanguageDefualt } from "@/types";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { LanguageTabs } from "./LanguageTaps";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { toast } from "sonner";
// import { Button } from "./ui/button";
// import { fishFormSchema } from "../lib/validator";
// import { IFish } from "@/lib/database/models/fish.model";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createFish, updateFish } from "@/lib/actions/fish.actions";
export default function FishForm() {
  // export default function FishForm({
  //   formType,
  //   fish,
  //   onSubmitSuccess,
  // }: {
  //   formType: "Update" | "Create";
  //   fish?: IFish;
  //   onSubmitSuccess: () => void;
  // })
  // const [activeLanguage, setActiveLanguage] = useState<Language>("en");
  // const queryClient = useQueryClient();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(fishFormSchema),
  //   defaultValues: fish
  //     ? {
  //         name: fish.name,
  //         desc: fish.desc,
  //         scientifcName: fish.scientifcName,
  //         imagePath: fish.imagePath,
  //       }
  //     : {
  //         name: MultiLanguageDefualt,
  //         desc: MultiLanguageDefualt,
  //         scientifcName: "",
  //         imagePath: "",
  //       },
  // });
  // const addFishMutation = useMutation({
  //   mutationFn: (data: FishParams) => createFish(data),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["fish"] });
  //     onSubmitSuccess();

  //     toast.success("Fish added successfully!");
  //   },
  // });
  // const editFishMutation = useMutation({
  //   mutationFn: (data: FishParams) => {
  //     if (fish?._id) {
  //       return updateFish(fish?._id, data);
  //     } else {
  //       throw new Error("Fish ID not found");
  //     }
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["fish"] });
  //     onSubmitSuccess();

  //     toast.success("Fish updated successfully!");
  //   },
  // });
  // const onSubmit = (fishData: FishParams) => {
  //   if (formType == "Update" && fish) {
  //     editFishMutation.mutate(fishData);
  //   } else {
  //     addFishMutation.mutate(fishData);
  //   }
  // };
  // return (
  //   <Card>
  //     <CardHeader>
  //       <CardTitle className="text-[#34699a]">
  //         {formType == "Update" ? "Edit Fish" : "Add New Fish"}
  //       </CardTitle>
  //     </CardHeader>
  //     <CardContent>
  //       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  //         <LanguageTabs
  //           activeLanguage={activeLanguage}
  //           onLanguageChange={setActiveLanguage}
  //         />

  //         <div className="space-y-4">
  //           <div>
  //             <Label htmlFor={`name-${activeLanguage}`}>
  //               Name ({activeLanguage.toUpperCase()})
  //             </Label>
  //             <Input
  //               id={`name-${activeLanguage}`}
  //               {...register(`name.${activeLanguage}`)}
  //               placeholder={`Enter name in ${activeLanguage.toUpperCase()}`}
  //             />
  //             {errors.name?.[activeLanguage] && (
  //               <p className="text-sm text-red-500 mt-1">
  //                 {errors.name[activeLanguage]?.message}
  //               </p>
  //             )}
  //           </div>

  //           <div>
  //             <Label htmlFor={`description-${activeLanguage}`}>
  //               Description ({activeLanguage.toUpperCase()})
  //             </Label>
  //             <Textarea
  //               id={`description-${activeLanguage}`}
  //               {...register(`desc.${activeLanguage}`)}
  //               placeholder={`Enter description in ${activeLanguage.toUpperCase()}`}
  //               rows={4}
  //             />
  //             {errors.desc?.[activeLanguage] && (
  //               <p className="text-sm text-red-500 mt-1">
  //                 {errors.desc[activeLanguage]?.message}
  //               </p>
  //             )}
  //           </div>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
  //         <div>
  //           <Label htmlFor="scientifcName">Scientifc name</Label>
  //           <Input
  //             id="scientifcName"
  //             {...register("scientifcName")}
  //             placeholder="Enter scientifc name"
  //           />
  //         </div>
  //         <div>
  //           <Label htmlFor="image">Image URL</Label>
  //           <Input
  //             id="image"
  //             {...register("imagePath")}
  //             placeholder="https://example.com/image.jpg"
  //           />
  //         </div>

  //         <div className="flex gap-2">
  //           <Button
  //             type="submit"
  //             className="cursor-pointer bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg"
  //           >
  //             {formType == "Update" ? "Update" : "Create"} Fish
  //           </Button>
  //           <Button type="button" className="cursor-pointer" variant="outline">
  //             Cancel
  //           </Button>
  //         </div>
  //       </form>
  //     </CardContent>
  //   </Card>
  // );
  return <></>;
}
