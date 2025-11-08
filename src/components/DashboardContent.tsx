"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Database,
  Fish,
  MapPin,
  ChartCandlestick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FishPortParams, MultiLangText, PortParams } from "@/types";
import {
  createPort,
  deletePort,
  getAllPorts,
  updatedPort,
} from "@/lib/actions/port.actions";
import { IPort } from "@/lib/database/models/port.model";
import { deleteFish, getAllFish } from "@/lib/actions/fish.actions";
import { IFish } from "@/lib/database/models/fish.model";
import {
  createFishPort,
  deleteFishPort,
  getAllFishPort,
  updateFishPort,
} from "@/lib/actions/fishPort.actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useLocale } from "next-intl";
// import FishForm from "./FishForm";
import { IFishPortPopulated } from "@/lib/database/models/FishPort.model";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

export default function DashboardContent({
  allFishPort,
}: {
  allFishPort?: {
    data: IFishPortPopulated[];
    total: number;
    totalPages: number;
  };
}) {
  const queryClient = useQueryClient();
  //   const { toast } = useToast();
  const [editingFish, setEditingFish] = useState<IFish | null>(null);
  const [editingFishPort, setEditingFishPort] =
    useState<IFishPortPopulated | null>(null);
  const [editingPort, setEditingPort] = useState<IPort | null>(null);
  const [isAddingFish, setIsAddingFish] = useState(false);
  const [isEditFish, setIsEditFish] = useState(false);
  const [isAddingPort, setIsAddingPort] = useState(false);
  const [isAddingFishPort, setIsAddingFishPort] = useState(false);

  const localeRaw = useLocale();
  const locale = localeRaw as keyof MultiLangText;

  // Fetch data
  const { data: fishPrices } = useQuery({
    queryKey: ["fishPrices"],
    queryFn: async () => await getAllFishPort({}),
    initialData: allFishPort,
  });
  const { data: ports } = useQuery({
    queryKey: ["ports"],
    queryFn: async () => await getAllPorts(),
  });

  const { data: fish } = useQuery({
    queryKey: ["fish"],
    queryFn: async () => await getAllFish(),
  });

  // Mutations
  const addFishPortMutation = useMutation({
    mutationFn: (data: FishPortParams) => createFishPort(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fishPrices"] });
      setIsAddingFishPort(false);
      toast.success("Fish price added successfully!");
    },
  });
  const updateFishPortMutation = useMutation({
    mutationFn: (data: FishPortParams) => updateFishPort(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fishPrices"] });
      setEditingFishPort(null);
      toast.success("Fish price updated successfully!");
    },
  });
  const deleteFishPortMutation = useMutation({
    mutationFn: (id: string) => deleteFishPort(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fishPrices"] });
      toast.success("Fish price deleted successfully!");
    },
  });

  // Port Mutations
  const addPortMutation = useMutation({
    mutationFn: (data: PortParams) => createPort(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ports"] });
      setIsAddingPort(false);

      toast.success("Port added successfully!");
    },
  });
  const updatePortMutation = useMutation({
    mutationFn: (data: PortParams) => updatedPort(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ports"] });
      setEditingPort(null);
      toast.success("Port updated successfully!");
    },
  });
  const deletePortMutation = useMutation({
    mutationFn: (id: string) => deletePort(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ports"] });
      toast.success("Port deleted successfully!");
    },
  });

  // Fish Mutations
  const deleteFishMutation = useMutation({
    mutationFn: (id: string) => deleteFish(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fish"] });
      toast.success("Fish deleted successfully!");
    },
  });

  const handleUpdateFishPort = (updatedFishPort: FishPortParams) => {
    updateFishPortMutation.mutate(updatedFishPort);
  };
  const handleAddFishPort = (fishData: FishPortParams) => {
    addFishPortMutation.mutate(fishData);
  };
  const handleDeleteFishPort = (id: string) => {
    deleteFishPortMutation.mutate(id);
  };
  // Port Functions
  const handleUpdatePort = (updatedPort: PortParams) => {
    updatePortMutation.mutate({
      ...updatedPort,
      lat: Number(updatedPort.lat),
      lng: Number(updatedPort.lng),
    });
  };

  const handleAddPort = (portData: PortParams) => {
    addPortMutation.mutate(portData);
  };
  const handleDeletePort = (id: string) => {
    deletePortMutation.mutate(id);
  };

  // Fish functions
  const handleDeleteFish = (id: string) => {
    deleteFishMutation.mutate(id);
  };
  return (
    <div className="min-h-screen mt-32 bg-background font-inter text-foreground">
      {/* Header */}
      <div className="bg-card  px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Database className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage fish market data,fish and ports
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="fish-price" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="fish-price"
              className="flex items-center space-x-2"
            >
              <ChartCandlestick className="h-4 w-4" />
              <span>Fish Prices</span>
            </TabsTrigger>
            <TabsTrigger value="fish" className="flex items-center space-x-2">
              <Fish className="h-4 w-4" />
              <span>Fish</span>
            </TabsTrigger>
            <TabsTrigger value="ports" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Ports</span>
            </TabsTrigger>
          </TabsList>

          {/* Fish Prices Management */}
          <TabsContent value="fish-price" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Fish Prices Management</CardTitle>
                <Dialog
                  open={isAddingFishPort}
                  onOpenChange={setIsAddingFishPort}
                >
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-br from-blue-500 to-teal-500 cursor-pointer"
                      data-testid="button-add-fish"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Fish Price
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Fish Price</DialogTitle>
                    </DialogHeader>
                    <AddFishPortForm
                      ports={ports || []}
                      fish={fish || []}
                      onSubmit={handleAddFishPort}
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-sm lg:text-base">
                        <th className="text-left p-3">Name</th>
                        <th className="text-left p-3 whitespace-nowrap">
                          Price (MAD)
                        </th>
                        <th className="text-left p-3">Port</th>
                        <th className="text-left p-3">Change</th>
                        <th className="text-left p-3">date</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(fishPrices?.data as IFishPortPopulated[])?.map(
                        (fishPrices: IFishPortPopulated) => {
                          return (
                            <tr
                              key={fishPrices._id.toString()}
                              className="border-b border-border/50 text-gray-800 text-xs lg:text-base hover:bg-muted/50"
                            >
                              {editingFishPort?._id === fishPrices._id ? (
                                <EditFishRow
                                  fishPrice={editingFishPort}
                                  fish={fish || []}
                                  ports={ports || []}
                                  onSave={handleUpdateFishPort}
                                  onCancel={() => setEditingFishPort(null)}
                                />
                              ) : (
                                <>
                                  <td className="p-3 flex flex-col">
                                    <p className="font-bold text-[#34699a]">
                                      {fishPrices.fish?.name}
                                    </p>
                                    <p className="text-sm font-semibold">
                                      SN:{fishPrices.fish?.scientifcName}
                                    </p>
                                  </td>
                                  <td className="p-3">
                                    {fishPrices.price.toFixed(2)}
                                  </td>

                                  <td className="p-3">
                                    {fishPrices.port?.name}
                                  </td>
                                  <td className="p-3">
                                    <span
                                      className={
                                        fishPrices.change >= 0
                                          ? "text-green-700"
                                          : "text-destructive"
                                      }
                                    >
                                      {fishPrices.change >= 0 ? "+" : ""}
                                      {(fishPrices.change || 0).toFixed(1)}%
                                    </span>
                                  </td>
                                  <td className="p-3 whitespace-nowrap">
                                    {formatDate(fishPrices.createdAt)}
                                  </td>
                                  <td className="p-3">
                                    <div className="flex space-x-2">
                                      <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-destructive hover:text-destructive cursor-pointer"
                                            data-testid={`button-delete-fish-${fishPrices._id}`}
                                          >
                                            <Trash2 className="h-3 w-3" />
                                          </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                          <AlertDialogHeader>
                                            <AlertDialogTitle>
                                              Are you absolutely sure?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                              This action cannot be undone. This
                                              will permanently delete your
                                              account and remove your data from
                                              our servers.
                                            </AlertDialogDescription>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter>
                                            <AlertDialogCancel>
                                              Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                              onClick={() =>
                                                handleDeleteFishPort(
                                                  fishPrices._id.toString()
                                                )
                                              }
                                              className="cursor-pointer bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg"
                                            >
                                              Continue
                                            </AlertDialogAction>
                                          </AlertDialogFooter>
                                        </AlertDialogContent>
                                      </AlertDialog>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          setEditingFishPort(fishPrices)
                                        }
                                        data-testid={`button-edit-fish-${fishPrices._id}`}
                                        className="cursor-pointer "
                                      >
                                        <Edit className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ports Management */}
          <TabsContent value="ports" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Ports Management</CardTitle>
                <Dialog open={isAddingPort} onOpenChange={setIsAddingPort}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-br from-blue-500 to-teal-500 cursor-pointer"
                      data-testid="button-add-port"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Port
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#34699a]">
                        Add New Port
                      </DialogTitle>
                    </DialogHeader>
                    <AddPortForm onSubmit={handleAddPort} />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(ports as IPort[])?.map((port: IPort) => (
                    <Card key={port.name} className="p-4">
                      {editingPort?.name === port.name ? (
                        <EditPortForm
                          port={editingPort}
                          onSave={handleUpdatePort}
                          onCancel={() => setEditingPort(null)}
                        />
                      ) : (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-[#34699a]">
                              {port.name}
                            </h3>
                            <div className="flex flex-col">
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    data-testid={`button-edit-port`}
                                    className="cursor-pointer text-red-600"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This action cannot be undone. This will
                                      permanently delete your account and remove
                                      your data from our servers.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeletePort(port._id)}
                                      className="cursor-pointer bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg"
                                    >
                                      Continue
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setEditingPort(port)}
                                data-testid={`button-edit-port-${port.name}`}
                                className="cursor-pointer text-[#34699a]"
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Lat: {Number(port.lat).toFixed(4)}, Lng:
                            {Number(port.lng).toFixed(4)}
                          </p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* Fish Management */}
          <TabsContent value="fish" className="space-y-6">
            <Dialog open={isEditFish} onOpenChange={setIsEditFish}>
              <DialogTrigger asChild></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                {/* {editingFish && (
                  <FishForm
                    formType="Update"
                    fish={editingFish}
                    onSubmitSuccess={() => {
                      setIsEditFish(false);
                    }}
                  />
                )} */}
              </DialogContent>
            </Dialog>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Fish Management</CardTitle>
                <Dialog open={isAddingFish} onOpenChange={setIsAddingFish}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-br from-blue-500 to-teal-500 cursor-pointer"
                      data-testid="button-add-port"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Fish
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle></DialogTitle>
                    </DialogHeader>
                    {/* <FishForm
                      formType="Create"
                      onSubmitSuccess={() => {
                        setIsAddingFish(false);
                      }}
                    /> */}
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(fish as IFish[])?.map((fish: IFish, idx) => (
                    <Card key={idx} className="p-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="space-y-2">
                            <h3 className="font-bold text-[#34699a]">
                              {fish.name}
                            </h3>
                            <h3 className="font-semibold">
                              {fish.scientifcName}
                            </h3>
                            <p className="">{fish.desc?.[locale]}</p>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                {/* <Button
                                  variant="ghost"
                                  size="sm"
                                  data-testid={`button-edit-port-${fish.name}`}
                                  className="cursor-pointer text-red-600"
                                >
                                  
                                  <Trash2 className="h-3 w-3" />
                                </Button> */}
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Are you absolutely sure?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDeleteFish(fish._id)}
                                    className="cursor-pointer bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg"
                                  >
                                    Continue
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>

                            {/* <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setEditingFish(fish);
                                setIsEditFish(true);
                              }}
                              data-testid={`button-edit-port-${fish.name}`}
                              className="cursor-pointer text-[#34699a]"
                            >
                              <Edit className="h-3 w-3" />
                            </Button> */}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

// Edit Fish Row Component
function EditFishRow({
  fishPrice,
  ports,
  fish,
  onSave,
  onCancel,
}: {
  fishPrice: IFishPortPopulated;
  ports: IPort[];
  fish: IFish[];
  onSave: (updatedFishPort: FishPortParams) => void;
  onCancel: () => void;
}) {
  const localeRaw = useLocale();
  const [formData, setFormData] = useState({
    fish: fishPrice.fish._id,
    port: fishPrice.port._id,
    price: fishPrice.price,
    _id: fishPrice._id.toString(),
  });

  return (
    <>
      <td className="p-3">
        <Select
          defaultValue={fishPrice.fish._id}
          onValueChange={(value) => setFormData({ ...formData, fish: value })}
        >
          <SelectTrigger className="w-full" data-testid="select-edit-port">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fish.map((fish: IFish) => (
              <SelectItem key={fish._id} value={fish._id}>
                {fish.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </td>
      <td className="p-3">
        <Input
          type="number"
          step="0.01"
          defaultValue={fishPrice.price}
          onChange={(e) =>
            setFormData({ ...formData, price: parseFloat(e.target.value) })
          }
          data-testid="input-edit-price"
        />
      </td>

      <td className="p-3">
        <Select
          defaultValue={fishPrice.port._id}
          onValueChange={(value) => setFormData({ ...formData, port: value })}
        >
          <SelectTrigger className="w-full" data-testid="select-edit-port">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ports.map((port: IPort) => (
              <SelectItem key={port._id} value={port._id}>
                {port.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </td>
      <td className="p-3"></td>
      <td className="p-3"></td>
      <td className="p-3">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSave(formData)}
            data-testid="button-save-fish"
            className="cursor-pointer"
          >
            <Save className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            data-testid="button-cancel-fish"
            className="cursor-pointer"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </td>
    </>
  );
}

// Add Fish Form Component
function AddFishPortForm({
  ports,
  fish,
  onSubmit,
}: {
  ports: IPort[];
  fish: IFish[];
  onSubmit: (fishData: FishPortParams) => void;
}) {
  const [formData, setFormData] = useState({
    price: "" as unknown as number,
    fish: "",
    port: "",
  });
  const localeRaw = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      ...formData,
    });
    setFormData({
      price: 0,
      fish: "",
      port: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-center items-center gap-16">
        <div className="w-[40%]">
          <Label htmlFor="fishName" className="py-3">
            Fish
          </Label>
          <Select
            value={formData.fish}
            onValueChange={(value) => setFormData({ ...formData, fish: value })}
            required
          >
            <SelectTrigger className="w-full" data-testid="select-add-fish">
              <SelectValue placeholder="Select a Fish" />
            </SelectTrigger>
            <SelectContent>
              {fish.map((fish: IFish) => (
                <SelectItem
                  key={fish._id.toString()}
                  value={fish._id.toString()}
                >
                  {fish.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-[40%]">
          <Label htmlFor="portName" className="py-3">
            Port
          </Label>
          <Select
            value={formData?.port}
            onValueChange={(value) => setFormData({ ...formData, port: value })}
            required
          >
            <SelectTrigger className="w-full" data-testid="select-add-port">
              <SelectValue placeholder="Select a port" />
            </SelectTrigger>
            <SelectContent>
              {ports.map((port: IPort) => (
                <SelectItem key={port.name} value={port._id}>
                  {port.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="price" className="py-3">
          Price (MAD)
        </Label>
        <Input
          id="price"
          type="number"
          placeholder="0"
          step="0.01"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: parseFloat(e.target.value) })
          }
          required
          data-testid="input-add-price"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-br from-blue-500 to-teal-500 cursor-pointer"
        data-testid="button-submit-fish"
      >
        Add Fish Price
      </Button>
    </form>
  );
}

// Add Port Form Component
function AddPortForm({
  onSubmit,
}: {
  onSubmit: (portData: PortParams) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    lat: "" as unknown as number,
    lng: "" as unknown as number,
    is_active: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", lat: 0, lng: 0, is_active: true });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="portName" className="py-3">
          Port Name
        </Label>
        <Input
          id="portName"
          defaultValue={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          data-testid="input-add-port-name"
        />
      </div>
      <div>
        <Label htmlFor="lat" className="py-3">
          Latitude
        </Label>
        <Input
          id="lat"
          type="number"
          step="0.0001"
          placeholder="0"
          defaultValue={formData.lat || ("" as unknown as number)}
          onChange={(e) =>
            setFormData({ ...formData, lat: parseFloat(e.target.value) })
          }
          required
          data-testid="input-add-lat"
        />
      </div>
      <div>
        <Label htmlFor="lng" className="py-3">
          Longitude
        </Label>
        <Input
          id="lng"
          type="number"
          step="0.0001"
          placeholder="0"
          defaultValue={formData.lng || ("" as unknown as number)}
          onChange={(e) =>
            setFormData({ ...formData, lng: parseFloat(e.target.value) })
          }
          required
          data-testid="input-add-lng"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-br from-blue-500 to-teal-500 cursor-pointer"
        data-testid="button-submit-port"
      >
        Add Port
      </Button>
    </form>
  );
}

// Edit Port Form Component
function EditPortForm({
  port,
  onSave,
  onCancel,
}: {
  port: PortParams;
  onSave: (updatedPort: PortParams) => void;
  onCancel: () => void;
}) {
  const [editedPort, setEditedPort] = useState(port);

  return (
    <div className="space-y-3">
      <Input
        defaultValue={editedPort.name}
        onChange={(e) => setEditedPort({ ...editedPort, name: e.target.value })}
        placeholder="Port name"
        data-testid="input-edit-port-name"
      />
      <Input
        type="number"
        step="0.0001"
        defaultValue={editedPort.lat}
        onChange={(e) =>
          setEditedPort({ ...editedPort, lat: parseFloat(e.target.value) })
        }
        placeholder="Latitude"
        data-testid="input-edit-port-lat"
      />
      <Input
        type="number"
        step="0.0001"
        defaultValue={editedPort.lng}
        onChange={(e) =>
          setEditedPort({
            ...editedPort,
            lng: parseFloat(e.target.value),
          })
        }
        placeholder="Longitude"
        data-testid="input-edit-port-lng"
      />
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSave(editedPort)}
          data-testid="button-save-port"
          className="cursor-pointer"
        >
          <Save className="h-3 w-3" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onCancel}
          data-testid="button-cancel-port"
          className="cursor-pointer"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
