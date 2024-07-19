'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Favorite, useFavorites } from '@/context/favorites'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/primitive/ui/form'
import { Input } from '@/primitive/ui/input'

const formSchema = z.object({
  stationName: z.string().min(2, {
    message: 'Statio name must be at least 2 characters.',
  }),
  tags: z.string().min(2, {
    message: 'Tags name must be at least 2 characters.',
  }),
})

type FormSchemaType = z.infer<typeof formSchema>

type EditStationFormProps = {
  favorite: Favorite
} & React.PropsWithChildren

export const EditStationForm = ({
  favorite,
  children,
}: EditStationFormProps) => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stationName: favorite.name,
      tags: favorite.tags,
    },
  })

  const { editFavorite } = useFavorites()

  const onSubmit = (values: FormSchemaType) => {
    editFavorite(favorite.stationuuid, {
      name: values.stationName,
      tags: values.tags,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="stationName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Statio Name</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="tags"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="internation, rapper, sad"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  )
}
