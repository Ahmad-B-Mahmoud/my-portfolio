"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, PencilLine, ContactRound, AtSign, Loader2 } from "lucide-react";
import { toast } from "sonner";
import * as m from "@/paraglide/messages.js";
import { languageTag } from "@/paraglide/runtime";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: m.contact_form_error_message_1(),
    })
    .max(30, {
      message: m.contact_form_error_message_2(),
    })
    .regex(/^[a-zA-Zأ-ي\s-]+$/, {
      message: m.contact_form_error_message_3(),
    }),
  email: z
    .string()
    .email({ message: m.contact_form_error_message_4() })
    .min(1, { message: m.contact_form_error_message_5() }),
  message: z
    .string()
    .min(10, {
      message: m.contact_form_error_message_6(),
    })
    .max(500, {
      message: m.contact_form_error_message_7(),
    })
    .regex(/^[a-zA-Zأ-ي0-9\s-!?\.]+$/, {
      message: m.contact_form_error_message_8(),
    }),
});

export function Contact({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{m.contact_me_btn()}</DialogTitle>
            <DialogDescription>
              {m.contact_form_description()}
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DrawerContent>
        <DrawerHeader
          className={languageTag() === "en" ? "text-left" : "text-right"}
        >
          <DrawerTitle>{m.contact_me_btn()}</DrawerTitle>
          <DrawerDescription>{m.contact_form_description()}</DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{m.cancel()}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = React.useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const apiKey = process.env.NEXT_PUBLIC_Web3form_Key;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        subject: "From My Portfolio",
        name: values.fullName,
        email: values.email,
        message: values.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast.success(m.contact_form_toast_success_title(), {
        description: m.contact_form_toast_success_description(),
      });
      setIsLoading(false);
    } else {
      toast.error(m.contact_form_toast_failed_title(), {
        description: m.contact_form_toast_failed_description(),
      });
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form
        className={cn("grid items-start gap-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <AtSign className="h-4 w-4 text-foreground inline-block" />{" "}
                  {m.contact_form_your_email()}
                </FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <ContactRound className="h-4 w-4 text-foreground inline-block" />{" "}
                  {m.contact_form_your_name()}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={m.contact_form_name_placeholder()}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <PencilLine className="h-4 w-4 text-foreground inline-block" />{" "}
                  {m.contact_form_your_message()}
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="..." rows={7} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="me-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="me-2 h-4 w-4 text-foreground" />
          )}
          {m.contact_form_send_mail()}
        </Button>
      </form>
    </Form>
  );
}
