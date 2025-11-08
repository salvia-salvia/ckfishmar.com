"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Save, X } from "lucide-react";
import { useLocale } from "next-intl";
import { MultiLangText } from "@/types";
import { IPort } from "@/lib/database/models/port.model";

export default function EditPortForm({
  port,
  onSave,
  onCancel,
}: {
  port: IPort;
  onSave: (editedPort: IPort) => void;
  onCancel: () => void;
}) {
  const [editedPort, setEditedPort] = useState(port);
  const localeRaw = useLocale();
  const locale = localeRaw as keyof MultiLangText;

  return (
    <div className="space-y-3">
      <Input
        value={editedPort.name}
        // onChange={(e) => setEditedPort({ ...editedPort, name: e.target.value })}
        placeholder="Port name"
        data-testid="input-edit-port-name"
      />
      <Input
        type="number"
        step="0.0001"
        value={editedPort.lat}
        // onChange={(e) =>
        //   setEditedPort({ ...editedPort, lat: parseFloat(e.target.value) })
        // }
        placeholder="Latitude"
        data-testid="input-edit-port-lat"
      />
      <Input
        type="number"
        step="0.0001"
        value={editedPort.lng}
        // onChange={(e) =>
        //   setEditedPort({
        //     ...editedPort,
        //     lng: parseFloat(e.target.value),
        //   })
        // }
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
